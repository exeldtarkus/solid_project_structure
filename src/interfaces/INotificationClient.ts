export interface INotificationClient {
  sendWelcomeEmail(to: string): Promise<void>;
}
