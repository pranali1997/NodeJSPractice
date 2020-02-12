let room= {
    number:23
};

let meetUp={
    title : "conference",
    participants : [{name: "john"}, {name:"Alice"}],
    place:room
};

room.occupiedBy=meetUp;

console.log(JSON.stringify(meetUp, function replacer(key,value){
    console.log(`${key}:${value}`);
    return (key=='occupiedBy') ? undefined:value;
}));
