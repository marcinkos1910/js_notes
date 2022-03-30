const job1Ref = document.getElementById('job1')
const job2Ref = document.getElementById('job2')


// const promise = new Promise ((resolve, reject) => {
//     job1Ref.addEventListener('click', () => {
//         console.log('it works 1');
//         resolve()
//     });
// });

// promise.then(() => {
//     job2Ref.addEventListener('click', () => {
//         console.log('it works');
//     });
// });

const promise = new Promise ((resolve, reject) => {
    const handleJob = () => {
        console.log('it works 1');
        resolve()
        job1Ref.removeEventListener('click', handleJob);
    }
    job1Ref.addEventListener('click', handleJob);

});

promise.then(() => {
    job2Ref.addEventListener('click', () => {
        console.log('it works 2');
    });
});