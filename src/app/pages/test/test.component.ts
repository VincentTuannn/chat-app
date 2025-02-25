import { Component } from "@angular/core";
import { ChatBubbleComponent } from "../../components/chat-bubble/chat-bubble.component";
import { ChatBubbleConfig } from "../../interfaces/ui-configs/chat-bubble-config.interface";
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { UserChatCardComponent } from "../../components/user-chat-card/user-chat-card.component";

@Component({
    selector: 'app-test',
    standalone: true,
    imports: [ChatBubbleComponent, SearchInputComponent, UserChatCardComponent],
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent {
    leftConfig: ChatBubbleConfig = {
        text: 'hello world',
        position: 'left'
    }
    
    rightConfig: ChatBubbleConfig = {
        text: 'how is going bro hai fhss ìah hshja shafjakjfbsdkbfsdfbkdsjfbskdjfsdkfbdskhfbhkdsbf',
        position: 'right'
    }

    handleSearch($event:string){
        console.log('Parent: ', $event);
    }
}