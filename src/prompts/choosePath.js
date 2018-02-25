/**
 * File: /Users/liu/company/rf/demo/vuex-cli/src/prompts/setup.1.js
 * Project: /Users/liu/company/rf/demo/vuex-cli
 * Created Date: Sunday, February 25th 2018, 4:49:31 pm
 * Author: liuchenghao at <liuchenghao1@cnpc.com.cn>
 * -----
 * Last Modified: Sunday February 25th 2018 4:49:31 pm
 * Modified By: liuchenghao at <liuchenghao1@cnpc.com.cn>
 * -----
 * Copyright (c) 2018 rf
 * ------------------------------------------
 * Javascript will save your undefined soul !
 */

import inquirer from 'inquirer';

export default () => {
  let list = ['1', '2'];
  return inquirer.prompt(
    [{
      type: 'checkbox',
      name: 'pages',
      message: 'What\'s pages will you choose? [CTRL-C to Exit]',
      paginated: true,
      choices: list,
      validate: function (answer) {
        if (answer.length < 1) {
          return 'You must choose at least one source directory.';
        }
        return true;
      }
    }]);
};
