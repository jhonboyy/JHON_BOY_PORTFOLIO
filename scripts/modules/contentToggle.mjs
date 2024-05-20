import { createProjectsSection, rightWorksButtons, animateSections } from "./works.mjs";
import { createAboutSection } from "./about.mjs";

let projectsSectionCreated = false;
let animationStarted = false;

let aboutSectionCreated = false;

export function toggleContent(button) {
  if (button.id === 'worksButton') {
      if (!projectsSectionCreated) {
          createProjectsSection();
          rightWorksButtons();
          projectsSectionCreated = true;
          startAnimation('works-content');
      }
      toggleDisplay('about-content', 'none');
      toggleDisplay('works-content', 'grid');
  } else if (button.id === 'aboutButton') {
      if (!aboutSectionCreated) {
          createAboutSection();
          aboutSectionCreated = true;
          startAnimation('about-content');
      }
      toggleDisplay('works-content', 'none');
      toggleDisplay('about-content', 'grid');
  }
}

function startAnimation(sectionId) {
  if (!animationStarted && window.innerWidth > 900) {
      animateSections(document.getElementById(sectionId));
      animationStarted = true;
  }
}

function toggleDisplay(sectionId, displayStyle) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.style.display = displayStyle;
  }
}
