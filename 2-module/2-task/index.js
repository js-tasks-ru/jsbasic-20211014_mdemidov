function isEmpty(obj) {
  // ваш код...
  for (let key in obj) {
    if (key in obj) return false;
  };
  return true;
};

let schedule = {};
alert(isEmpty(schedule));

schedule["8:30"] = "подъём";
alert(isEmpty(schedule));

delete schedule["8:30"];
alert(isEmpty(schedule));

schedule['age'] = undefined;
alert(isEmpty(schedule));

