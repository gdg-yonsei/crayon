import site from 'data/configs/site.json';

/**
 * Names
 */
export const BLOG_NAME = site.name;
export const COMMENT_REPO = site.commentRepo;

/**
 * Domains
 */
export const LOCAL_DOMAIN = 'http://localhost:3000';
export const VERCEL_DOMAIN =
  process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`;

export const DOMAIN = site.domain || VERCEL_DOMAIN || LOCAL_DOMAIN;
export const API_DOMAIN = site.apiDomain || `${DOMAIN}/api`;

/**
 * URLs
 */
export const indexUrl = '/';
export const aboutUrl = '/about';
export const categoryUrl = '/category';
export const tagUrl = '/tag';
