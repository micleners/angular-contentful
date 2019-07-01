// ./src/app/contentful.service.ts
import { Injectable } from '@angular/core';
// import Contentful createClient and type for `Entry`
import { createClient, Entry } from 'contentful';
import { contentfulKeys } from 'api-keys';

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
  space: contentfulKeys.space,
  accessToken: contentfulKeys.accessToken,

  contentTypeIds: {
    event: 'event',
    location: 'location',
    user: 'user'
  }
};

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() {}

  getEvents(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: CONFIG.contentTypeIds.event
          },
          query
        )
      )
      .then(res => res.items);
  }

  getUsers(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: CONFIG.contentTypeIds.user
          },
          query
        )
      )
      .then(res => res.items);
  }

  getLocations(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: CONFIG.contentTypeIds.location
          },
          query
        )
      )
      .then(res => res.items);
  }
}
