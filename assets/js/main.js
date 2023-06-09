'use strict';

/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */

let scrollLinks = document.querySelectorAll('.scrollto');
const pageNavWrapper = document.getElementById('navigation');

scrollLinks.forEach((scrollLink) => {
    scrollLink.addEventListener('click', (e) => {
        e.preventDefault();

        let element = document.querySelector(scrollLink.getAttribute('href'));

        const yOffset = 69; //page .header height

        //console.log(yOffset);

        const y =
            element.getBoundingClientRect().top + window.pageYOffset - yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });

        //Collapse mobile menu after clicking
        if (pageNavWrapper.classList.contains('show')) {
            pageNavWrapper.classList.remove('show');
        }
    });
});

/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Get the sticky header

// Initialize Gumshoe
var spy = new Gumshoe('#navigation a', {
    offset: 69, //page .header heights
});

/* ======= Countdown ========= */
// set the date we're counting down to
var target_date = new Date('May 27, 2023').getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById('countdown-box');
var days_span = document.createElement('SPAN');
days_span.className = 'days';
countdown.appendChild(days_span);
var hours_span = document.createElement('SPAN');
hours_span.className = 'hours';
countdown.appendChild(hours_span);
var minutes_span = document.createElement('SPAN');
minutes_span.className = 'minutes';
countdown.appendChild(minutes_span);
var secs_span = document.createElement('SPAN');
secs_span.className = 'secs';
countdown.appendChild(secs_span);

// update the tag with id "countdown" every 1 second
setInterval(function () {
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value.
    days_span.innerHTML =
        '<span class="number">' +
        days +
        '</span>' +
        '<span class="unit">Dias</span>';
    hours_span.innerHTML =
        '<span class="number">' +
        hours +
        '</span>' +
        '<span class="unit">Hrs</span>';
    minutes_span.innerHTML =
        '<span class="number">' +
        minutes +
        '</span>' +
        '<span class="unit">Mins</span>';
    secs_span.innerHTML =
        '<span class="number">' +
        seconds +
        '</span>' +
        '<span class="unit">Segs</span>';
}, 1000);

var modalSpeakerInfo = document.getElementById('modal-speaker-info');
modalSpeakerInfo.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;

    var speakerSlug = button.getAttribute('data-bs-speaker-slug');
    const speaker = getSpeakerBySlug(speakerSlug)

    var speakerNameElement = modalSpeakerInfo.querySelector('#name');
    var avatarElement = modalSpeakerInfo.querySelector('#avatar');
    var jobTitleElement = modalSpeakerInfo.querySelector('#job-title');
    var companyNameElement = modalSpeakerInfo.querySelector('#company-name');
    var mainBioElement = modalSpeakerInfo.querySelector('#main-bio');
    var linkedinLinkElement = modalSpeakerInfo.querySelector('#linkedin-link');
    var twitterLinkElement = modalSpeakerInfo.querySelector('#twitter-link');
    var githubLinkElement = modalSpeakerInfo.querySelector('#github-link');
    var youtubeLinkElement = modalSpeakerInfo.querySelector('#youtube-link');

    avatarElement.setAttribute('src', speaker.avatar);
    speakerNameElement.textContent = speaker.speakerName;
    jobTitleElement.textContent = speaker.jobTitle;
    companyNameElement.textContent = speaker.companyName;
    if (speaker.mainBio) {
        mainBioElement.style.display = 'inherit';
        mainBioElement.innerHTML = speaker.mainBio;
    } else {
        mainBioElement.style.display = 'none';
    }

    _showOrHiddenLinkAttribute(linkedinLinkElement, speaker.linkedinLink);
    _showOrHiddenLinkAttribute(twitterLinkElement, speaker.twitterLink);
    _showOrHiddenLinkAttribute(githubLinkElement, speaker.githubLink);
    _showOrHiddenLinkAttribute(youtubeLinkElement, speaker.youtubeLink);
});

function _showOrHiddenLinkAttribute(linkAttribute, linkValue) {
    if (linkAttribute == null) {
        return;
    }

    if (linkValue == null) {
        linkAttribute.setAttribute('href', '#');
        linkAttribute.parentNode.style.display = 'none';
    } else {
        linkAttribute.setAttribute('href', linkValue);
        linkAttribute.parentNode.style.display = 'inline';
    }
}
