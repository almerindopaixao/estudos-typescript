export default interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  startEvents(): void;
}
