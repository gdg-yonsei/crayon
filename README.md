# Crayon

> :star: **Crayon is under development!** :star:  
> The following descriptions can be modified and it is unstable to use now.

A powerful blog generator

-  Simple and Light
- Responsive design
- Comments system using [utterances](https://utteranc.es/)
- Code highlighter using [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- Classification using categories and tags
- Sharing posts with read-only mode


<img width="1792" alt="스크린샷 2022-09-12 오후 6 10 00" src="https://user-images.githubusercontent.com/11978494/189616116-1a6787eb-24f2-4572-9289-c44c269c74b7.png">

<img width="1792" alt="스크린샷 2022-09-12 오후 6 10 36" src="https://user-images.githubusercontent.com/11978494/189616231-a4bcdee9-2b8b-4c51-8774-d1b9dbf320ef.png">

<img width="1792" alt="스크린샷 2022-09-12 오후 6 11 14" src="https://user-images.githubusercontent.com/11978494/189616356-8887f04a-0766-4f2b-97a8-a417a327c066.png">

## How to initialize

### Using forking

1. Fork this repository to your project.
2. Install dependencies.

    ```
    yarn
    ```
3. Run crayon.
    ```
    yarn dev
    ```
4. Now you are ready to make your own blog using crayon!

### Using npx

- WIP

## How to config

- You ONLY need to modify `/data/configs` folder on root for your blog configuration.

```
site.json
post.json (auto-generated)
```

- After running your first crayon blog on local, there will be two json files.

### site.json

- You can set following variables as your site configuration.
   - `name` : Blog name
   - `url` : Blog domain where your blog will be deployed
   - `port` : Local port number where your blog will be run on server
   - `commentRepo` : (Optional) Repository for managing posts` comments

### post.json

- You don't need to modify this file.
- It will be generated automatically when your blog is built or started.

## How to post

- You ONLY need to modify `/data/posts` folder on root for blog posting.

```
_about
  /content.md

foo-post
  /content.md
  /apple.png
  /banana.png
  /...

bar-post
  /content.md
  /...

...
```

- Each post needs one folder with a unique id (folder name).
- Its content can be written in markdown and it should be named as `content.md`.
- Images for a post should be located in its post folder,  or you can use external image links!

## How to deploy

- A blog genereated by crayon can not deployed as static files.
- WIP

## Ideas & Bugs

- WIP

