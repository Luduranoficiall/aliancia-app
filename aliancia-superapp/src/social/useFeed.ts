import { FeedService } from "./FeedService";

const feed = new FeedService();

export function useFeed() {
  const getFeed = () => feed.getFeed();
  const post = (content: string) => feed.post(content);
  return { getFeed, post };
}
