const dev = process.env.NODE_ENV !== 'produtcion'

export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'
