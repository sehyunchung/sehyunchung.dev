import { MetadataRoute } from "next"

const baseUrl = "https://sehyunchung.dev"

// TODO: generate automatically
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/notes`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/toys`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/posts`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
		},
	]
}
