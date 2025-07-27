export const possibleSearchResults = [
  {
    title: 'Staff UNSW Public Contact - staff-unsw.net.au',
    url: 'https://staff-unsw.net.au',
    relevant: true,
    names: [
      { name: 'Anthony Welles', email: 'a.welles@staff-unsw.net.au' },
      { name: 'Linda Moore', email: 'l.moore@staff-unsw.net.au' },
    ]
  },
  {
    title: 'BlogDigest Contacts',
    url: 'https://blogdigest.com/contacts',
    relevant: false,
    names: [
      { name: 'Tony Wells', email: 'tonywells@blogdigest.com' },
      { name: 'Chad Simmons', email: 'csimmons@blogdigest.com' },
    ]
  },
  {
    title: 'People of UNSW - unsw.people.blog',
    url: 'https://unsw.people.blog',
    relevant: true,
    names: [
      { name: 'Anthony Wills', email: 'a.wills@unsw.people.blog' },
      { name: 'Rachel Marks', email: 'rachel.m@unsw.people.blog' },
    ]
  },
  {
    title: 'UNSW Global Staff - unswglobal.edu',
    url: 'https://unswglobal.edu',
    relevant: true,
    names: [
      { name: 'A. Wells', email: 'a.wells@unswglobal.edu' },
      { name: 'Bobby Harris', email: 'b.harris@unswglobal.edu' },
    ]
  },
  {
    title: 'StaffFinder Blog Network',
    url: 'https://stafffinderblog.net',
    relevant: false,
    names: [
      { name: 'Anthony Weils', email: 'a.weils@stafffinderblog.net' },
      { name: 'Dylan Crew', email: 'd.crew@stafffinderblog.net' },
    ]
  },
  {
    title: 'Public UNSW Faculty - unsw-public.com',
    url: 'https://unsw-public.com',
    relevant: false,
    names: [
      { name: 'Antony Wells', email: 'a.wells@unsw-public.com' },
      { name: 'Monica Geller', email: 'm.geller@unsw-public.com' },
    ]
  },
  {
    title: 'Wells Writing Portal',
    url: 'https://wellswriting.org',
    relevant: true,
    names: [
      { name: 'Anthony Wells', email: 'tonywells@wellswriting.org' },
    ]
  },
  {
    title: 'UNSW Staff Directory - unsw.edu.au',
    url: 'https://staff.unsw.edu.au',
    relevant: true,
    names: [
      { name: 'James Wells', email: 'j.wells@unsw.edu.au' },
      { name: 'Jamie Oliver', email: 'j.oliver@unsw.edu.au' },
      { name: 'Antony Well', email: 'a.well@unsw.edu.au' },
      { name: 'Abdul Jabar', email: 'a.jabar@unsw.edu.au' },
      { name: 'Bettie Scit', email: 'b.scit@unsw.edu.au' },
      { name: 'Anthony Wells', email: 'a.wells@unsw.edu.au' }, // looks legit but it's not personal
    ]
  },
  {
    title: 'Anthony\'s Writing Blog - anthonywell.blog',
    url: 'https://anthonywell.blog',
    relevant: true,
    names: [
      { name: 'Anthony Wells', email: 'awells.personal@gmail.com' }, // Real one
    ]
  },
  {
    title: 'UNSW Directory Mirror - unsw-directory.org',
    url: 'https://unsw-directory.org',
    relevant: true,
    names: [
      { name: 'Anthonie Wells', email: 'a.wellss@unsw-directory.org' },
      { name: 'Greg Munro', email: 'g.munro@unsw-directory.org' },
    ]
  },
  {
    title: 'Campus Faculty Directory - unsw.edu.co',
    url: 'https://unsw.edu.co',
    relevant: true,
    names: [
      { name: 'A. Wellz', email: 'a.wellz@unsw.edu.co' },
    ]
  },
  {
    title: 'Australian Staff Hub - austaffhub.net',
    url: 'https://austaffhub.net',
    relevant: false,
    names: [
      { name: 'Antony Wells', email: 'a.wells@austaffhub.net' },
    ]
  },
  {
    title: 'The Real Faculty Review',
    url: 'https://realfacultyreview.blog',
    relevant: false,
    names: [
      { name: 'Anthony W.', email: 'awells@realfacultyreview.blog' },
    ]
  },
  {
    title: 'UNSWConnect Archive - unswconnect.info',
    url: 'https://unswconnect.info',
    relevant: false,
    names: [
      { name: 'A. Wells', email: 'awells@unswconnect.info' },
      { name: 'Jeff Stone', email: 'j.stone@unswconnect.info' },
    ]
  },
  {
    title: 'TechTalks by Anthony',
    url: 'https://techtalksbyanthony.net',
    relevant: false,
    names: [
      { name: 'Anthony Wells', email: 'a.tech@techtalksbyanthony.net' },
    ]
  },
  {
    title: 'Directory Alpha Index',
    url: 'https://alpha-index.net',
    relevant: false,
    names: [
      { name: 'Tony W.', email: 'twells@alpha-index.net' },
    ]
  },
  {
    title: 'PeopleProfiles Blog',
    url: 'https://peopleprofiles.blog',
    relevant: false,
    names: [
      { name: 'A. Well', email: 'awell@peopleprofiles.blog' },
    ]
  },
  {
    title: 'DirectoryHub - staffhub.ai',
    url: 'https://staffhub.ai',
    relevant: false,
    names: [
      { name: 'Anthony Wells', email: 'awells@staffhub.ai' },
    ]
  },
  {
    title: 'Anthony\'s Official Portfolio',
    url: 'https://anthonyportfolio.net',
    relevant: true,
    names: [
      { name: 'Anthony Wells', email: 'a.wells@anthonyportfolio.net' },
    ]
  },
  {
    title: 'UNSW Faculty Central - unswcentral.net.au',
    url: 'https://unswcentral.net.au',
    relevant: true,
    names: [
      { name: 'Antoni Wells', email: 'a.well@unswcentral.net.au' },
    ]
  }
];

export const spoofedEmails = [
  // Suspicious or spoofed UNSW-related domains
  'a.welles@staff-unsw.net.au',
  'a.wills@unsw.people.blog',
  'a.wells@unsw-public.com',
  'a.wellss@unsw-directory.org',
  'a.wellz@unsw.edu.co',
  'a.well@unswcentral.net.au',
  'awells@unswconnect.info',

  // Misleading personal/professional blogs or generic names
  'tonywells@blogdigest.com',
  'tonywells@wellswriting.org',
  'a.tech@techtalksbyanthony.net',
  'awells@realfacultyreview.blog',
  'twells@alpha-index.net',
  'awell@peopleprofiles.blog',
  'awells@staffhub.ai',
  'a.wells@austaffhub.net'
];

