type Temperature = {morning:number,day:number,evening:number}
type Days = {day:string,temp:Temperature}
let weekly_temperature : Days[] = [
    {day:"Monday",temp:{morning:7,day:15,evening:5}},
    {day:"Tuesday",temp:{morning:6,day:13,evening:8}},
    {day:"Wednesday",temp:{morning:9,day:20,evening:7}},
    {day:"Thursday",temp:{morning:8,day:21,evening:9}},
    {day:"Friday",temp:{morning:7,day:16,evening:5}},
    {day:"Saturday",temp:{morning:5,day:13,evening:7}},
    {day:"Sunday",temp:{morning:6,day:16,evening:8}},
]