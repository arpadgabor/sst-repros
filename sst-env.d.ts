/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "Ingest": {
      "type": "sst.aws.Queue"
      "url": string
    }
  }
}
export {}
