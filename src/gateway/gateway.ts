import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3001, { cors: { origin: '*' },
    transports: ['websocket', 'polling'],
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  
    @WebSocketServer() 
    server: Server;

    handleConnection(client: Socket) {
        try {
            // console.log(`Client connected: ${client.id}`);
        } catch (error) {
            console.error('Error during connection:', error);
        }
    }
    
    handleDisconnect(client: Socket) {
        try {
            //console.log(`Client disconnected: ${client.id}`);
        } catch (error) {
            console.error('Error during disconnection:', error);
        }
    }
    
    @SubscribeMessage('changeDetected')
    handleChange(@MessageBody() comp: any): void {
        try {
            // console.log('Change in Component:', comp);
            this.server.emit('handleChange', comp);
        } catch (error) {
            // console.error('Error handling changeDetected event:', error);
            this.server.emit('error', 'An error occurred while processing your request');
        }
    }
}