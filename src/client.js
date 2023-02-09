import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "59furmlt",
	dataset: "production",
	apiVersion: "2022-02-01",
	useCdn: "true",
	token:
		"skDeJO3VyehWqCWf0Yd0QkGKaYCScKQ2y0zC3JFSrjNKl2inNekwnC4cxjlAxyoIUp7X2QajZOLzy8cuYbLgtAKvcmW2V8jzFlfI469gob70tmjaLoWvHPausR5kugr9xfKsabZmnp7tUot2hWC7tsaiB0wd9Mg3UcTnB3Dl73mooCHwjnxY",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
