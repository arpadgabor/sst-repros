/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'sst-bug-repro',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    }
  },
  async run() {
    const queue = new sst.aws.Queue('Ingest', {
      visibilityTimeout: '30 seconds',
    })

    queue.subscribe({
      handler: 'src/ingest.handler',
      timeout: '30 seconds',
    })
  },
})
