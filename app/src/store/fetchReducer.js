import * as actionTypes from './actionTypes'

import { combineReducers, createStore, applyMiddleware } from 'redux'

import ReduxThunk from 'redux-thunk'




import { dataobj } from '../data'
const initialState={
      completeData:dataobj.data,
      data:[{"name":"zAgron Kabashi","email":"agron.kabashi@1337.tech","phoneNumber":"+46725133736","office":"Lund","manager":"lotta.wennolf@1337.tech","orgUnit":"/Employees","mainText":"\u003cp\u003eI have been working in the software industry for over 10 years now, and even though the road has been bumpy, I don’t regret a single second of it! My experiences have been quite varied, from creating games to full blown web-based intranet platforms.\u003c/p\u003e\u003cp\u003eBecause of this variation and these experiences I’ve found that I’ve acquired a thirst for front-end development and anything web related, which can range from mobile apps to web-based SaaS solutions. The fact that you can create ANYTHING with almost nothing is an exhilarating feeling. It’s one of the major reasons that keeps me going; the only limit is my imagination.\u003c/p\u003e\u003cp\u003eI absolutely love to travel and experience new cultures (and food!) when the opportunity presents itself. My goal in life is to visit as many places and experience as many different cultures as I possibly can. So far I can cross off Europe and half of Asia from my list, and I look forward to many more exciting adventures to come.\u003c/p\u003e  ","gitHub":"AgronKabashi","twitter":"_agronkabashi","stackOverflow":null,"linkedIn":"/pub/agron-kabashi/54/6a8/4a6","imagePortraitUrl":"https://i.1337co.de/profile/agron-kabashi","imageWallOfLeetUrl":"https://i.1337co.de/wallofleet/agron-kabashi","highlighted":false,"published":true},{"name":"Ahmad Mirzaei","email":"ahmad.mirzaei@1337.tech","phoneNumber":"+46705133787","office":"Lund","manager":"sarah.thoren@1337.tech","orgUnit":"/Employees","mainText":"\u003cp\u003eIt all started with my brother's projects from local businesses almost 8 years ago, when he was responsible for developing web interfaces for them.\u003c/p\u003e \u003cp\u003eThere was a time where he was struggling to handle multiple projects at the same time, so he encouraged me to join him in the journey. After completing some small projects - using simple UI designs - it became my passion.This passion drives me even up until this moment and it still makes me forget about the time as I focus on providing a better solution for the challenges that I’m facing all the time. Yes, this passion that I am talking about is like an engine inside me that would work without fuel, something infinite, only for one reason and that is I love what I do.\u003c/p\u003e \u003cp\u003e I have always believed that Front-end development is a thing that I would love, because it always brings me some fresh challenges to think about, makes me use all my effort and thought in order to provide a better solution.Thinking about the years that have passed by so far - deep diving in heart of the front end technologies and finding out about all it’s nuts and bolts and filling out my days and nights with it - brings a smile to my face. This smile is because I can look at myself and know that I've been enjoying some of the best times of my life, and I’m really glad that I've chosen the right thing for rest of it.\u003c/p\u003e \u003cp\u003eTech life aside, in my spare time I always love to go biking, hiking, and love to walk or run. I’m not good at cooking but I actually love the experience of cooking when there are no options left (only for survival purpose). If I’m not doing one of those things, you would probably find me in Github’s explore page or in stack overflow helping some tech fellows.\u003c/p\u003e  ","gitHub":"a-m-dev","twitter":"a_m_dev","stackOverflow":"5354341","linkedIn":"/in/ahmad-mirzaei-b60b2618a/","imagePortraitUrl":"https://i.1337co.de/profile/ahmad-mirzaei","imageWallOfLeetUrl":"https://i.1337co.de/wallofleet/ahmad-mirzaei","highlighted":false,"published":true},{"name":"Ahmed Bazzara","email":"ahmed.bazzara@1337.tech","phoneNumber":"+46705133723","office":"Lund","manager":"andreas.nilsson@1337.tech","orgUnit":"/Employees","mainText":"\u003cp\u003eIt started with a hedgehog, not just any hedgehog. Sonic The Hedgehog was 9 years old, I was five. Since then gaming and computers has been the most persistent distraction of my life. Despite this I’m a very social and outgoing creature who values the company of my friends highly.\u003c/p\u003e\u003cp\u003eIt took me a while to find programming -were around 11 years old when I wrote my first program on VB-, but when I finally did, I realised that I’m totally hooked on the thought of creating, finding flaws and develop smart digital solutions. I keep chasing new knowledge in order to improve and I’m one of those who get truly satisfied when I can see the results of my work. \u003c/p\u003e\u003cp\u003eThe last couple of years I’ve been struggling to find my way as a newbie in Sweden. Now when I’ve finally found it I feel ready to dive in to the world of programming for real. I like the thought diving and I’m actually also a quite dedicated swimmer in my spare time. Every now and then I love to marathon watch a really good TV-series and If I’m not inside you’ll find me camping in the nature. I haven’t got to do that much travelling the last couple of years, but the very second I get the opportunity I’ll be on an airplane ready to explore and fill my self with experiences.\u003c/p\u003e  ","gitHub":"ticooo95","twitter":null,"stackOverflow":null,"linkedIn":"/in/ahmed-bazzara/","imagePortraitUrl":"https://i.1337co.de/profile/ahmed-bazzara","imageWallOfLeetUrl":"https://i.1337co.de/wallofleet/ahmed-bazzara","highlighted":false,"published":true},{"name":"Akan Murat Cimen","email":"akan.murat.cimen@1337.tech","phoneNumber":null,"office":"Lund","manager":"jim@1337.tech","orgUnit":"/Incoming","mainText":null,"gitHub":null,"twitter":null,"stackOverflow":null,"linkedIn":null,"imagePortraitUrl":null,"imageWallOfLeetUrl":null,"highlighted":false,"published":false},{"name":"Alban Nurkollari","email":"alban.nurkollari@1337.tech","phoneNumber":"+46768133799","office":"Helsingborg","manager":"andreas.nilsson@1337.tech","orgUnit":"/Employees","mainText":"\u003cp\u003eMy friends and colleagues describe me as a friendly, helping, adapting, energetic and most of all focus-oriented person.\u003c/p\u003e\u003cp\u003eI embrace programming with creativity and try to provide best practices and logic. I value diversity among peers and respect them utmost.\u003c/p\u003e  ","gitHub":"albannurkollari","twitter":"VennBani","stackOverflow":"5453170","linkedIn":"/in/albannurkollari/","imagePortraitUrl":"https://i.1337co.de/profile/alban-nurkollari","imageWallOfLeetUrl":"https://i.1337co.de/wallofleet/alban-nurkollari","highlighted":false,"published":true}]
}
const fetchReducers=(state=initialState,action)=>{
   
    if(action.type===actionTypes.ERROR){
        return {
            ...state,
            errorStatus:action.payload
        }
    }
    if(action.type===actionTypes.FETCH){
     
        return {
            ...state,
           // technologies:action.payload.data   need to enable once backend is ready
           completeData:state.completeData
        }
    }
    return state;
}

const rootReducers=combineReducers({
    data:fetchReducers
    })
  
export const store=createStore(rootReducers,applyMiddleware(ReduxThunk))
