import {
  bio,
  skills,
  education,
  experience,
  projects,
  certifications,
  awards,
  footer,
  contactLinks,
} from "./user-data/data.js";
import { html, render } from "https://unpkg.com/lit-html?module";

import { URLs } from "./user-data/urls.js";

const { medium, gitConnected, gitRepo } = URLs;

async function fetchBlogsFromMedium(url) {
  try {
    const response = await fetch(url);
    const { items, feed } = await response.json();
  document.getElementById("profile-img").src = "images/profile/profile.webp" || feed.image;
    populateBlogs(items, "blogs");
  } catch (error) {
    throw new Error(
      `Error in fetching the blogs from Medium profile: ${error}`
    );
  }
}

async function fetchReposFromGit(url) {
  try {
    const response = await fetch(url);
    const items = await response.json();
    populateRepo(items, "repos");
  } catch (error) {
    throw new Error(`Error in fetching the blogs from repos: ${error}`);
  }
}

async function fetchGitConnectedData(url) {
  try {
    const response = await fetch(url);
    const { basics } = await response.json();
    mapBasicResponse(basics);
  } catch (error) {
    throw new Error(`Error in fetching the blogs from git connected: ${error}`);
  }
}

function mapBasicResponse(basics) {
  const {
    name,
    label,
    image,
    email,
    phone,
    url,
    summary,
    profiles,
    headline,
    blog,
    yearsOfExperience,
    username,
    locationAsString,
    region,
    karma,
    id,
    followers,
    following,
    picture,
    website,
  } = basics;

  // Removed dynamic title change to prevent flickering
}

function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  const bioTemplate = html` ${items.map((bioItem) => html`<p>${bioItem}</p>`)}`;
  render(bioTemplate, bioTag);
}

function populateSkills(items, id) {
  const skillsTag = document.getElementById(id);

  const skillsTemplate = html` ${items.map(
    (item) => html` <div class="col-md-3 animate-box">
      <div class="progress-wrap">
        <li class="skill-item">${item}</li>
      </div>
    </div>`
  )}`;
  render(skillsTemplate, skillsTag);
}

function populateBlogs(items, id) {
  const projectdesign = document.getElementById(id);
  const createCategoryBadges = (categories) => html`
    <div class="categories-div">
      ${categories.map(
        (category) => html` <div class="profile-badge brown-badge">${category}</div> `
      )}
    </div>
  `;

  const blogTemplate = html`
    ${items.slice(0, 3).map(
      (item) => html`
        <div class="blog-card">
          <div class="blog-content">
            <a href="${item.link}" target="_blank" class="blog-link">
              <p class="blog-heading">${item.title}</p>
              <p class="publish-date">${getBlogDate(item.pubDate)}</p>
              <p class="blog-description">
                ${item.content.replace(/<[^>]*>/g, '').trim()}
              </p>
              ${createCategoryBadges(item.categories)}
            </a>
          </div>
        </div>
      `
    )}
  `;

  render(blogTemplate, projectdesign);
}

function populateRepo(items, id) {
  const projectdesign = document.getElementById(id);
  if (!projectdesign || !items?.length) return;

  const statsTemplate = (item) => html`
    <div class="stats-row">
      <div class="language-div">
        <span class="language-dot"></span>
        ${item.language}
      </div>
      <div class="stats-div">
        <img
          src="https://img.icons8.com/ios-filled/16/666666/star--v1.png"
          alt="Stars"
        />
        ${item.stars}
      </div>
      <div class="stats-div">
        <img
          src="https://img.icons8.com/ios-filled/16/666666/code-fork.png"
          alt="Forks"
        />
        ${item.forks}
      </div>
    </div>
  `;

  const repoTemplate = html`
    <div class="repo-wrapper">
      ${items.slice(0, 4).map(
        (item) => html`
          <div class="repo-card">
            <a
              href="https://github.com/${item.author}/${item.name}"
              target="_blank"
              class="repo-link"
            >
              <p class="repo-heading">${item.name}</p>
              <p class="repo-description">${item.description}</p>
              ${statsTemplate(item)}
            </a>
          </div>
        `
      )}
    </div>
  `;

  render(repoTemplate, projectdesign);
}

function populateExp_Edu(items, id) {
  const mainContainer = document.getElementById(id);
  if (!mainContainer || !items?.length) return;

  const detailsTemplate = (details) => html`
    ${details.map(
      (detail) => html` <p class="timeline-text">&blacksquare; ${detail}</p> `
    )}
  `;

  const tagsTemplate = (tags) => html`
    <div class="tags-container">
      ${tags.map((tag) => html`<div class="profile-badge brown-badge">${tag}</div>`)}
    </div>
  `;

  const timelineTemplate = html`
    ${items.map(
      (item) => html`
        <article class="timeline-entry animate-box">
          <div class="timeline-entry-inner">
            <div class="timeline-icon color-2">
              <i class="fa fa-${item.icon}"></i>
            </div>
            <div class="timeline-label">
              <div class="exp-heading">
                <p class="blog-heading">${item.title}</p>
                <span class="publish-date">${item.duration}</span>
              </div>
              <span class="timeline-sublabel">${item.subtitle}</span>
              ${detailsTemplate(item.details)} ${tagsTemplate(item.tags)}
            </div>
          </div>
        </article>
      `
    )}
    <article class="timeline-entry begin animate-box">
      <div class="timeline-entry-inner">
        <div class="timeline-icon color-2"></div>
      </div>
    </article>
  `;

  render(timelineTemplate, mainContainer);
}

function populateLinks(items, id) {
  const footer = document.getElementById(id);
  if (!footer || !items?.length) return;

  const linkTemplate = (data) => html`
    <li>
      <a
        href="${data.link || "#"}"
        @click="${data.func || null}"
      >
        ${data.text}
      </a>
    </li>
  `;

  const columnTemplate = (item) => html`
    <span class="col">
      <p class="col-title">${item.label}</p>
      <nav class="col-list">
        <ul>
          ${item.data.map((data) => linkTemplate(data))}
        </ul>
      </nav>
    </span>
  `;

  const copyrightTemplate = (item) => html`
    <div class="copyright-text no-print">
      ${item.data.map((copyright) => html`<p>${copyright}</p>`)}
    </div>
  `;

  const footerTemplate = html`
    ${items.map(
      (item) => html`
        ${item.label === "copyright-text"
          ? copyrightTemplate(item)
          : columnTemplate(item)}
      `
    )}
  `;

  render(footerTemplate, footer);
}

function populateContactLinks(items, id) {
  const contactLinks = document.getElementById(id);
  if (!contactLinks || !items?.length) return;
  const contactLinkTemplate = (item) => html`
    <li class="profile-card" style="padding: 6px 12px">
      <a href="${item.link}" target="_blank" class="contact-link">
        <i class="${item.icon}"></i>
        <span class="contact-label">${item.label}</span>
      </a>
    </li>
  `;
  const contactLinksTemplate = html`
    <ul class="contact-links-list">
      ${items.map((item) => contactLinkTemplate(item))}
    </ul>
  `;
  render(contactLinksTemplate, contactLinks);
}

function getElement(tagName, className) {
  let item = document.createElement(tagName);
  item.className = className;
  return item;
}

function getBlogDate(publishDate) {
  const elapsed = Date.now() - Date.parse(publishDate);

  // Time conversions in milliseconds
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  if (elapsed < msPerMinute) {
    const seconds = Math.floor(elapsed / msPerSecond);
    return `${seconds} seconds ago`;
  } else if (elapsed < msPerHour) {
    const minutes = Math.floor(elapsed / msPerMinute);
    return `${minutes} minutes ago`;
  } else if (elapsed < msPerDay) {
    const hours = Math.floor(elapsed / msPerHour);
    return `${hours} hours ago`;
  } else if (elapsed < msPerMonth) {
    const days = Math.floor(elapsed / msPerDay);
    return days == 1 ? `${days} day ago` : `${days} days ago`;
  } else if (elapsed < msPerYear) {
    const months = Math.floor(elapsed / msPerMonth);
    return months == 1 ? `${months} month ago` : `${months} months ago`;
  } else {
    const years = Math.floor(elapsed / msPerYear);
    return years == 1 ? `${years} year ago` : `${years} years ago`;
  }
}

// Set profile image and handle any loading errors
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById("profile-img");
    if (profileImg) {
        profileImg.onerror = function() {
            console.error('Error loading profile image');
            this.src = 'images/profile/default-avatar.png'; // Fallback image
        };
  profileImg.src = "images/profile/profile.webp";
    }
});

populateBio(bio, "bio");

populateSkills(skills, "skills");

fetchBlogsFromMedium(medium);
fetchReposFromGit(gitRepo);
fetchGitConnectedData(gitConnected);

populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");

function populateProjects(items, id) {
  const projectsContainer = document.getElementById(id);
  if (!projectsContainer || !items?.length) return;

  const tagsTemplate = (tags) => html`
    <div class="tags-container">
      ${tags.map((tag) => html`<div class="profile-badge brown-badge">${tag}</div>`)}
    </div>
  `;

  const projectTemplate = html`
    ${items.map(
      (project) => html`
        <div class="col-md-6 animate-box">
          <a href="${project.link}" target="_blank" class="project-card">
            <div class="project-image" style="background-image: url('${project.image}')">
              <div class="project-overlay">
                <div class="project-icon">
                  <i class="fa fa-${project.icon}"></i>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-description">${project.description}</p>
              ${tagsTemplate(project.tags)}
              <div class="github-link">
                <i class="fa fa-github"></i> View on GitHub
              </div>
            </div>
          </a>
        </div>
      `
    )}
  `;

  render(projectTemplate, projectsContainer);
}

function populateCertifications(items, id) {
  const certificationsContainer = document.getElementById(id);
  if (!certificationsContainer || !items?.length) return;

  const certTemplate = html`
    ${items.map(
      (cert) => html`
        <div class="col-md-6 animate-box">
          <div class="certification-card">
            <div class="cert-header">
              <img src="${cert.logo}" alt="${cert.issuer} Logo" class="cert-logo">
              <div class="cert-icon">
                <i class="fa fa-${cert.icon}"></i>
              </div>
            </div>
            <h3 class="cert-title">${cert.title}</h3>
            <p class="cert-issuer">${cert.issuer} (${cert.date})</p>
            <p class="cert-id">Credential ID: ${cert.credentialId}</p>
            <p class="cert-description">${cert.description}</p>
            <a href="${cert.link}" target="_blank" class="cert-link">
              <i class="fa fa-external-link"></i>
              Verify Certificate
            </a>
          </div>
        </div>
      `
    )}
  `;

  render(certTemplate, certificationsContainer);
}

function populateAwards(items, id) {
  const awardsContainer = document.getElementById(id);
  if (!awardsContainer || !items?.length) return;

  const awardTemplate = html`
    ${items.map(
      (award) => html`
        <div class="col-md-6 animate-box">
          <div class="award-card">
            <img src="${award.image}" alt="${award.title}" class="award-image">
            <div class="award-content">
              <div class="award-icon">
                <i class="fa fa-${award.icon}"></i>
              </div>
              <h3 class="award-title">${award.title}</h3>
              <p class="award-issuer">${award.issuer}</p>
              <p class="award-date">${award.date}</p>
              <p class="award-description">${award.description}</p>
            </div>
          </div>
        </div>
      `
    )}
  `;

  render(awardTemplate, awardsContainer);
}

populateProjects(projects, "projects");
populateCertifications(certifications, "certifications");
populateAwards(awards, "awards");
populateLinks(footer, "footer");
populateContactLinks(contactLinks, 'contact-links');
