/*
 * Copyright (C) 2024 Igor Teplostanski <teplostanski@yandex.ru>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import {Command} from '@oclif/core'

import {loadPackageJson} from './utils/load-package-json.js'

const pkg = loadPackageJson()

export abstract class Init extends Command {
  static summary = `${pkg.description}`

  public version: string = `${pkg.version}`

  async init(): Promise<void> {
    await super.init()

    //const notifier = updateNotifier({
    //  pkg: packageJson,
    //  updateCheckInterval: 0, // Проверять каждые 1 час для тестирования
    //})

    //notifier.notify({
    //  defer: false,
    //  isGlobal: true,
    //})

    //if (notifier.update) {
    //  const message = `Update available ${notifier.update.current} → ${notifier.update.latest}\nRun npm i -g ${pkg.name} to update`;

    //  // Печатаем сообщение без рамки
    //  console.log(message);
    //}
  }
}
