// Local "database" for the CTF challenge
// IDOR vulnerability: Students can access other profiles by changing the ID in the URL

export interface Student {
  id: number;
  name: string;
  dimension: string;
  department: string;
  enrollmentYear: number;
  avatar: string;
  grades: {
    subject: string;
    grade: number;
    professor: string;
  }[];
  secretNotes?: string;
}

export const students: Student[] = [
  {
    id: 1337,
    name: "THE ARCHITECT OF REALITIES",
    dimension: "Dimension Ω - Beyond The Veil",
    department: "Forbidden Sciences & Reality Engineering",
    enrollmentYear: 1337,
    avatar: "",
    grades: [
      { subject: "Reality Manipulation", grade: 100, professor: "Unknown Entity" },
      { subject: "Dimensional Breach Theory", grade: 100, professor: "The Void" },
    ],
    secretNotes: "CyberQuest{1D0R_Unl0ck3d_Th3_F0rb1dd3n_D1m3ns10n_FST}"
  },
  {
    id: 1,
    name: "Ethan Carter",
    dimension: "Dimension Alpha-7",
    department: "Quantum Computing & Parallel Algorithms",
    enrollmentYear: 2023,
    avatar: "",
    grades: [
      { subject: "Quantum Entanglement 101", grade: 85, professor: "Dr. Schrödinger IX" },
      { subject: "Multiverse Mathematics", grade: 92, professor: "Prof. Euler Clone" },
      { subject: "Dimensional Data Structures", grade: 78, professor: "Dr. Binary Star" },
    ],
  },
  {
    id: 2,
    name: "Olivia Brooks",
    dimension: "Dimension Beta-3",
    department: "Astro-Biology & Xenogenetics",
    enrollmentYear: 2022,
    avatar: "",
    grades: [
      { subject: "Alien DNA Sequencing", grade: 95, professor: "Dr. Helix Nova" },
      { subject: "Exoplanet Ecosystems", grade: 88, professor: "Prof. Terra II" },
      { subject: "Cosmic Microbiology", grade: 91, professor: "Dr. Microbe X" },
    ],
  },
  {
    id: 3,
    name: "Noah Mitchell",
    dimension: "Dimension Gamma-12",
    department: "Dark Matter Engineering",
    enrollmentYear: 2024,
    avatar: "",
    grades: [
      { subject: "Dark Energy Harvesting", grade: 72, professor: "Dr. Void Walker" },
      { subject: "Antimatter Safety", grade: 68, professor: "Prof. Neutron" },
      { subject: "Singularity Studies", grade: 81, professor: "The Horizon" },
    ],
  },
  {
    id: 4,
    name: "Sophia Bennett",
    dimension: "Dimension Delta-9",
    department: "Temporal Physics",
    enrollmentYear: 2021,
    avatar: "",
    grades: [
      { subject: "Time Loop Theory", grade: 97, professor: "Dr. Chronos" },
      { subject: "Paradox Prevention", grade: 94, professor: "Prof. Timeline" },
      { subject: "Causal Mechanics", grade: 89, professor: "The Keeper" },
    ],
  },
];

export const getStudentById = (id: number): Student | undefined => {
  return students.find(student => student.id === id);
};

export const getAllPublicStudents = (): Student[] => {
  // "Security" - hide the secret student from the list
  // But the IDOR vulnerability allows direct access via ID
  return students.filter(student => student.id !== 1337);
};
