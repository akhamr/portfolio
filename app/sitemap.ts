import { getAllPost } from "@/lib/hooks/use-postlib";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.BASE_URL;
  const curDate = new Date().toISOString();
  const posts = await getAllPost();

  const routes = ["", "/blog", "/projects", "/about"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: curDate,
  }));

  const blogs = posts.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date).toISOString(),
  }));

  return [...routes, ...blogs];
}
