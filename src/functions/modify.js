import axios from "axios";

export const modifyTrain = (trainId, trainObject) =>
  new Promise((resolve) => {
    axios
      .patch(`https://kisvasutak-admin.herokuapp.com/trains/${trainId}`, {
        id: "-" + trainId,
        trainObject,
      })
      .then((res) => {
        resolve({
          isSuccess: true,
          ...res,
        });
      });
  });

export const modifySight = (trainId, sightId, sightObject) =>
  new Promise((resolve) => {
    axios
      .patch(`https://kisvasutak-admin.herokuapp.com/sights/${trainId}`, {
        trainId: "-" + trainId,
        id: "-" + sightId,
        sightObject,
      })
      .then((res) => {
        resolve({
          isSuccess: true,
          ...res,
        });
      });
  });

export const modifyAcc = (trainId, accId, accObject) =>
  new Promise((resolve) => {
    axios
      .patch(`https://kisvasutak-admin.herokuapp.com/accomodations/${trainId}`, {
        trainId: "-" + trainId,
        id: "-" + accId,
        accObject,
      })
      .then((res) => {
        resolve({
          isSuccess: true,
          ...res,
        });
      });
  });
