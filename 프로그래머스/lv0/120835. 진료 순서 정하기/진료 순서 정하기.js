function solution(emergency) {
    const newEmergency = [...emergency].sort((a,b)=>b-a);
    return emergency.map(v => newEmergency.indexOf(v)+1);
}