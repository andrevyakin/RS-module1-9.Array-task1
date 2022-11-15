const peopleWaiting = ["Кристина", "Олег", "Кирилл", "Мария", "Светлана", "Артем", "Глеб"];

giveParcel = () => {
    const name = peopleWaiting.shift();
    alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
}

leaveQueueWithoutParcel = () => {
    const name = peopleWaiting.pop();
    alert(`${name} не получил(а) посылку и ушел(ла) из очереди`)
}
for (let i = 0; i < 3; i++)
    giveParcel();

peopleWaiting
    .slice()
    .reverse()
    .forEach(i =>
        leaveQueueWithoutParcel()
    );
