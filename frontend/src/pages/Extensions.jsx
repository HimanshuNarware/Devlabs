import React from "react";
import "../style/Extension.css";

const extensions = [
  { name: "Usersnap Chrome extension", description: "The Usersnap Chrome extension lets you capture and annotate any web page directly in your browser. It’s super-easy to provide visual feedback on prototypes or report bugs with this Google extension.", link: "https://chrome.google.com/webstore/detail/usersnap-classic-collect/khehmhbaabkepkojebhcpjifcmojdmgd?utm_source=blog", image: "https://lh3.googleusercontent.com/dwk31hLXUjiMlYg-PWlbzeg1NM5bc8PEuXcsFjv1NpR3DCpnYaFFJSkPK0RUkm9h5w_J0z5CTMIRvzaf53Wb42XF4Q=s60" },
  { name: "Web Developer extension", description: "The Google extension web developers have a lot of handy tools developers can use in their day-to-day work – for graphic designers as well as programmers.", link: "https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm", image: "https://lh3.googleusercontent.com/H662aZCLuvojQ3u36n76zhnyo1b_y2ef7OanOaeRowoU1hR1EMbKlnPslBiAknJzRplXmjq-OXeIgtV95i-BDE-BXw=s60" },
  { name: "Hiver – Chrome extension", description: "This is a tool that helps teams manage group inboxes like engineering@ and bugs@ right from Gmail.", link: "https://chrome.google.com/webstore/detail/hiver-gmail-based-custome/fcinnggknmdfkilogcndkgpojpfojeem", image: "https://lh3.googleusercontent.com/oTImuax2h7BjpG1bWnaDQ9n2oUJAnFUhkajGmzqAfn9P4kdy-uf_YUoi2RQ9Qr2tEN9vdjTIZG3_v3cLMSPLurji=s60" },
  { name: "ClickUp", description: "ClickUp is an all-in-one productivity solution for software teams to plan, collaborate, and manage projects in one centralized work hub.", link: "https://chrome.google.com/webstore/detail/clickup-tasks-screenshots/pliibjocnfmkagafnbkfcimonlnlpghj?hl=en", image: "https://lh3.googleusercontent.com/0WM3KRhW0rZ7jaq-egsEq7xPdb7WOpmsnxvwd53Egwsa9zT2pnAjtH0P7lldUP8x44B-F1tGy7ORvILhgsW8OHge3g=s60" },
  { name: "actiTIME", description: "actiTIME Timer tool helps every web developer to keep track of work hours directly from the web browser and web apps such as Jira. It is used by companies and freelancers for analyzing performance and controlling the project’s progress and profitability.", link: "https://chrome.google.com/webstore/detail/actitime-time-tracking-pr/oogddkbohgikljeadnkcepdmekigegck", image: "https://lh3.googleusercontent.com/BOPW4fvq2F49CCRJRy1DO9cQj5VAft7CimkuoJxFk3zkR4DyGz2xjWSa3V6gLoSXDdKVNP_DvMMJdhsguxaMZBcohg=s60" },
  { name: "JSONVue", description: "As a developer working with RESTful APIs, reading raw JSON data on a browser can be quite awkward. It’s much easier to read JSON in tree-view, rather than in its raw state.", link: "https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en%20", image: "https://lh3.googleusercontent.com/4rEXe8coLpWkeFvKwS3lnNuqev5jHuz782UOPIgfubs-e_wPitMALrGUY1j6gwrlM7yTjzMkTP26DeIgGuzFZZyn0A=s60" },
  { name: "Dark Reader Extension", description: "It enables dark mode on any website, reducing eye strain and making it easier to read at night.", link: "https://darkreader.org/", image: "https://avatars.githubusercontent.com/u/38494721?v=4"},
  { name: "Rakuten Extension", description: "It’s a nice way to get some cashback, and this is on top of whatever cashback or points you may get from your credit card! The extension makes it easy to check for offers while shopping online.", link: "https://chromewebstore.google.com/detail/rakuten-get-cash-back-for/chhjbpecpncaggjpdakmflnfcopglcmi?hl=en", image: "https://logowik.com/content/uploads/images/rakuten7982.jpg"},
  { name: "Privacy Badger", description: "Privacy Badger automatically learns to block invisible trackers.Instead of keeping lists of what to block, Privacy Badger automatically discovers trackers based on their behavior. If trackers ignore your wishes, Privacy Badger will learn to block them.", link: "https://chromewebstore.google.com/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp", image: "https://lh3.googleusercontent.com/LzhiFbFNvTwkOM7XX4K3wkwSlTkMj6NLyixs1yLPaYGIzXaiFGsfi6qcwzKzQcLR-6jtIVnFPRlQWUZC-OlnHpROcg=s60" },]

const Extension = () => {
  return (
    <div className="extension">
      <h1 className="title">Extensions</h1>
      <div className="extension-grid">
        {extensions.map((extension, index) => (
          <div key={index} className="extension-card">
            <img src={extension.image} alt={extension.name} className="extension-image" />
            <h2 className="extension-name">{extension.name}</h2>
            <p className="extension-description">{extension.description}</p>
            <a href={extension.link} target="_blank" rel="noopener noreferrer" className="extension-link">Visit Website</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extension;