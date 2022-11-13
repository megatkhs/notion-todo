import ky from 'ky'

export const client = ky.create({
  prefixUrl: 'https://api.notion.com/',
  headers: {
    Authorization: `Bearer secret_g8TvcHPuTT3Ga71Fbs50iuHGjbTFfQSZLR2sTsXxj64`,
  },
})
