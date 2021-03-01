const pagesInfo = {
  selectServicePage: {
    title: 'Wählen Sie einen Auftrag aus',
    content: ['Reperatur aufgeben', 'Support leisten', 'Reklemation aufgeben'],
  },
  customerMainPage: {
    title: 'Geben Sie die Informationen des Kunden ein',
    fields: {
      fname: {
        field: 'Vorname',
        placeholder: 'Enter First Name',
        errorMsg: 'Your must enter a valid name.',
      },
      lname: {
        field: 'Nachname',
        placeholder: 'Enter Last Name',
        errorMsg: 'Your must enter a valid last name.',
      },
      email: {
        field: 'E Mail',
        placeholder: 'Enter Mail Adress',
        errorMsg: 'You must enter a valid mail adress.',
      },
      mob: {
        field: 'Kunden Id',
        placeholder: 'Enter Customer Id',
        errorMsg: 'You must enter a valid customer Id.',
      },
    },
  },
  issueDetailPage: {
    title: 'Geben Sie weitere Informationen über den Auftrag',
    fields: {
      cname: {
        field: 'Unternehmen',
        placeholder: 'Enter Company Name',
        errorMsg: 'You must enter a valid company name.',
      },
      zip: {
        field: 'Plz',
        placeholder: 'Enter Plz',
        errorMsg: 'You must enter a valid plz.',
      },
      title: {
        field: 'Titel',
        placeholder: 'Enter Titel',
        errorMsg: 'You must enter a valid Title.',
      },
      typeinfo: {
        field: 'Type',
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
  editPage: { title: 'Bearbeiten Sie hier den Auftrag' },
  summaryPage: { title: 'Bestätigen Sie die Auftragszusammenfassung' },
  finalPage: { title: 'Vielen dank! Der Auftrag wurde bestätigt' },
};

export default pagesInfo;
