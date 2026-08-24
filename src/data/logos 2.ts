// Official brand marks — companies, school, and core languages/tools.
// Sourced from Wikimedia Commons (company/school logos) and Simple Icons (tech logos).

// Companies & school
import protivitiLogo from '../../assets/logos/protiviti.svg';
import cognizantLogo from '../../assets/logos/cognizant.svg';
import bestBuyLogo from '../../assets/logos/bestbuy.svg';
import untLogo from '../../assets/logos/unt.png';
import eawLogo from '../../assets/logos/eaw.png';

export const companyLogos: Record<string, string> = {
  Protiviti: protivitiLogo,
  Cognizant: cognizantLogo,
  'Best Buy': bestBuyLogo,
  'University of North Texas': untLogo,
  'Education at Work': eawLogo,
};

// Education at Work's mark is white text on a transparent background — needs a dark tile to read.
// Everything else is drawn for light backgrounds.
export const companyLogoTileClass: Record<string, string> = {
  'Education at Work': 'bg-slate-800',
};

// Programming languages, frameworks & tools
import react from '../../assets/tech/react.svg';
import typescript from '../../assets/tech/typescript.svg';
import python from '../../assets/tech/python.svg';
import java from '../../assets/tech/openjdk.svg';
import cplusplus from '../../assets/tech/cplusplus.svg';
import nodedotjs from '../../assets/tech/nodedotjs.svg';
import tailwindcss from '../../assets/tech/tailwindcss.svg';
import pytorch from '../../assets/tech/pytorch.svg';
import tensorflow from '../../assets/tech/tensorflow.svg';
import postgresql from '../../assets/tech/postgresql.svg';
import docker from '../../assets/tech/docker.svg';
import googlecloud from '../../assets/tech/googlecloud.svg';
import figma from '../../assets/tech/figma.svg';
import git from '../../assets/tech/git.svg';
import github from '../../assets/tech/github.svg';
import express from '../../assets/tech/express.svg';
import jest from '../../assets/tech/jest.svg';
import cypress from '../../assets/tech/cypress.svg';
import selenium from '../../assets/tech/selenium.svg';
import jenkins from '../../assets/tech/jenkins.svg';
import gitlab from '../../assets/tech/gitlab.svg';
import firebase from '../../assets/tech/firebase.svg';
import notion from '../../assets/tech/notion.svg';
import jira from '../../assets/tech/jira.svg';
import supabase from '../../assets/tech/supabase.svg';
import vite from '../../assets/tech/vite.svg';
import radixui from '../../assets/tech/radixui.svg';
import reacthookform from '../../assets/tech/reacthookform.svg';
import reactquery from '../../assets/tech/reactquery.svg';
import googlegemini from '../../assets/tech/googlegemini.svg';
import numpy from '../../assets/tech/numpy.svg';
import scikitlearn from '../../assets/tech/scikitlearn.svg';
import jupyter from '../../assets/tech/jupyter.svg';
import matlab from '../../assets/tech/matlab.png';

// Keys match the tech/tag names used verbatim throughout portfolioData.ts
export const techLogos: Record<string, string> = {
  React: react,
  'React Native': react,
  TypeScript: typescript,
  Python: python,
  Java: java,
  'C++': cplusplus,
  'Node.js': nodedotjs,
  'Tailwind CSS': tailwindcss,
  PyTorch: pytorch,
  'TensorFlow.js': tensorflow,
  TensorFlow: tensorflow,
  PostgreSQL: postgresql,
  SQL: postgresql,
  Docker: docker,
  GCP: googlecloud,
  Figma: figma,
  Git: git,
  GitHub: github,
  GitLab: gitlab,
  Express: express,
  Jest: jest,
  Cypress: cypress,
  Selenium: selenium,
  Jenkins: jenkins,
  Firebase: firebase,
  Notion: notion,
  Jira: jira,
  Supabase: supabase,
  Vite: vite,
  'Radix UI': radixui,
  'Radix UI / shadcn': radixui,
  'React Hook Form': reacthookform,
  'TanStack Query': reactquery,
  'Gemini API': googlegemini,
  'Google Gemini API': googlegemini,
  'Google GenAI SDK': googlegemini,
  MATLAB: matlab,
};
