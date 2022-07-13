import { Sequelize } from "sequelize";

//mysqlConfig에서 export defalut를 사용하여 변수를 내보냈기 때문에
//여기에서 선언하는 config 변수는 {}로 묶지 않는다.
import config from "../config/mysqlConfig.js";

import initModel from "./init-models.js";

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = initModel(sequelize);

//export { 변수들}
//한개의 파일(모듈)에서 두개 이상의 변수 또는 함수를 내보낼때
export { db, sequelize };
