/**
 * Template signature
 * @param {string} link - app address is required
 * @param {Object} params - optional user's params for templates
 */

export const registration = (link, { name, confirmationLink }) => ({
  subject: 'Спасибо за вашу поддержку',
  body: {
    greeting: 'Здравствуйте,',
    signature: 'Искренне Ваш,',
    name: name,
    intro: [
      'Мы благодарим Вас за оказанное доверие и вклад в развитие НИТУ «МИСиС»!',
      'Ознакомиться с отчетом о деятельности эндаумент-фонда НИТУ «МИСиС» за 2016 год можно пройдя по ссылке	https://drive.google.com/open?id=0B0Guhx6okkA7WF9STGFDSUhheEk'
  ],
    action: {
      instructions: `В личном кабинете на нашем сайте вы можете посмотреть информацию о ваших пожертвованиях`,
      button: {
        text: 'Перейти на сайт',
        link: `${confirmationLink}`
      }
    }
  }
})

export const recoveryPassword = (link, { name, token }) => ({
  subject: 'Восстановление пароля',
  body: {
    greeting: 'Здравствуйте,',
    signature: 'C уважением',
    name: name,
    intro: 'Вы оставили заявку на восстановление пароля',
    action: {
      instructions: `Для завершения операции перейдите по ссылке`,
      button: {
        text: 'Изменить пароль',
        link: `${link}/password-recovery/${token}`
      }
    }
  }
})

export const changeCard = (link, { token, projectName, value }) => ({
  subject: 'Cмена карты',
  body: {
    signature: 'Искренне Ваш,',
    intro: `Здравствуйте ${name}, вы оформили ежемесячное пожертвование в наш фонд для поддержки проекта "${projectName}"
    в размере ${value} рублей, но за последний месяц с вашей банковской карты не удается снять средства`,
    action: {
      instructions: `Мы предлагаем вам зарегистрировать новую карту`,
      button: {
        text: 'Сменить карту',
        link: `${link}`
      }
    }
  }
})
