import axios from 'axios'

export const modifyTrain = (trainId,trainObject) => new Promise(resolve => {
    axios.patch(`http://localhost:8080/trains/${trainId}`, {
        id: '-' + trainId,
        trainObject
    } )
        .then(res => {
            resolve({
                isSuccess: true,
                ...res,
            })
        })
})