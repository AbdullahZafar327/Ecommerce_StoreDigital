import SanityClient  from "@sanity/client";
import ImageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
    projectId : '070zbfb7',
    dataset : 'production',
    apiVersion:'2023-01-17',
    useCdn : true,
    token:'skowidcpsc5ymV94qIUgkxdkiP9zc8FbjwYJasZ1D8IV4y7KRMxBHUZVBxqUfTi7QwRNr4xd1BuJshlDaqq0y1fSJXdfTP24X04mNpJVeTtvEixBO2or5jve8KQSix0cO6XBNNZmY6dol7xhejAhKpPjjFLrA1Hv75US9uLUG4HaZEl4hT92',
})

const builder = ImageUrlBuilder(client)
export const urlFor = (source)=>builder.image(source);