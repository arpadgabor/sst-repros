import { setTimeout } from 'node:timers/promises'
import { SQSEvent } from 'aws-lambda'

export async function handler(event: SQSEvent) {
  console.log(event)

  let i = 0
  while (i < 10) {
    console.log(i)
    await setTimeout(1000)
    i++
  }

  console.log('Done')
}
