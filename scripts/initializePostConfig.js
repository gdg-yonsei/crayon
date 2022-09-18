/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
let chalk = require('chalk');

// I/O
function getDataPath(endpoint) {
  return path.resolve(__dirname, `../data${endpoint ?? ''}`);
}

function readFile(filePath) {
  return fs.readFileSync(filePath, { encoding: 'utf-8' });
}

function readDirectory(dirPath) {
  return fs.readdirSync(dirPath);
}

function writeFile(filePath, data) {
  fs.writeFileSync(filePath, data, { encoding: 'utf-8' });
}

// Find posts
function getPostList() {
  const postListPath = getDataPath('/posts');
  const postList = readDirectory(postListPath);

  return postList;
}

function getPost(postId) {
  const postPath = getDataPath(`/posts/${postId}/content.md`);

  return readFile(postPath);
}

// Parse post
function parseMetadata(post) {
  const { data } = matter(post);

  return data;
}

// Generate post config
function generatePostConfig() {
  const posts = getPostList();

  const postConfig = posts
    .filter((postId) => !postId.startsWith('_'))
    .map((postId) => {
      const post = getPost(postId);
      const metadata = parseMetadata(post);

      return {
        id: postId,
        ...metadata,
      };
    });

  return postConfig;
}

// Initialize post config
try {
  const postConfig = JSON.stringify(generatePostConfig());

  writeFile(getDataPath('/configs/_post.json'), postConfig);

  console.info(chalk.blue('Successfully post config initialized'));
} catch (error) {
  console.error(chalk.red(`Failed to initialize post config.\n${error}`));
}
