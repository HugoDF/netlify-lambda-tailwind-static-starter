import emoji from 'node-emoji';

export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify(emoji.random())
  }
}
