import axios from 'axios';
import { INotificationClient } from '../interfaces/INotificationClient';

export class NotificationClient implements INotificationClient {
  private baseUrl = process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:4000';

  async sendWelcomeEmail(to: string): Promise<void> {
    await axios.post(`${this.baseUrl}/email/welcome`, { to });
  }
}
