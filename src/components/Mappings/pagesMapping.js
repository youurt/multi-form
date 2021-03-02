const pagesInfo = {
  selectServicePage: {
    title: 'Wählen Sie einen Service',
    content: ['Reperatur-Service', 'Support-Service', 'Reklemation-Service'],
  },
  customerMainPage: {
    title: 'Informationen zur Person',
    fields: {
      fname: {
        field: 'Vorname',
        placeholder: 'Geben Sie Ihren Vornamen ein',
        errorMsg: 'Der Vorname scheint nicht korrekt zu sein!',
      },
      lname: {
        field: 'Nachname',
        placeholder: 'Geben Sie Ihren Nachnamen ein',
        errorMsg: 'Der Vorname scheint nicht korrekt zu sein!',
      },
      email: {
        field: 'E Mail',
        placeholder: 'Geben Sie Ihre e-mail Adresse ein',
        errorMsg: 'Die e-mail Adresse scheint nicht korrekt!',
      },
      cuid: {
        field: 'Kunden-ID',
        placeholder: 'Geben Sie Ihre Kunden-ID ein',
        errorMsg:
          'Die Kunden-ID ist genau 7 Zeichen lang und besteht aus Zahlen!',
      },
    },
  },
  issueDetailPage: {
    title: 'Informationen zum Unternehmen',
    fields: {
      cname: {
        field: 'Unternehmen',
        placeholder: 'Geben Sie den Namen Ihres Unternehmens ein',
        errorMsg: 'Der Namen des Unternehmens scheint nicht korrekt zu sein!',
      },
      zip: {
        field: 'PLZ',
        placeholder: 'Geben Sie die PLZ des Unternehmens ein',
        errorMsg: 'Die PLZ scheint nicht korrekt zu sein!',
      },
      title: {
        field: 'Position',
        placeholder: 'Geben Sie Ihre Position im Unternehmen ein',
        errorMsg: 'Die Position schein nicht korrekt zu sein!',
      },
      typeinfo: {
        field: 'Branche',
        options: [
          { text: 'Select One', value: null },
          'E-commerce',
          'Personal',
          'Business',
          'Education',
        ],
        placeholder: null,
        errorMsg: 'You must enter a valid Title.',
      },
    },
  },
  editPage: { title: 'Möchten Sie noch etwas hinzufügen?' },
  summaryPage: { title: 'Sind diese Eingaben richtig?' },
  finalPage: {
    title: 'Zusammenfassung.',
  },
  headerPage: {
    title: 'Nennen Sie uns Ihr Problem und wir helfen gerne!',
    subtitle: 'Ihr ComputerRepair24.com Team!',
    callText: 'Rufen Sie uns an',
    callNo: '0123456789',
  },
};

export default pagesInfo;
