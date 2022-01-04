import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="container bg-white p-5 mt-5 h-100">
        <h1 className="text-bold text mt-3 text-center">
          Frequently Asked Questions
        </h1>
        <p>
          Some of these are not actually asked frequently, but they're still
          good to know.
        </p>

        <h3 className="text-bold text">Who can post to talkweb?</h3>
        <p>
          Anyone! Yes, you have permission to make a new post of any kind as
          long as it meets our community guidelines and gets through
          common-sense spam filters. Your post is subject to removal at the
          discretion of the moderators if they believe it does not meet the
          requirements of our code of conduct.
        </p>
        <h3>How do I post article on talkweb?</h3>
        <p>
          Click on "Write a Post" in the top right corner of the site. Write
          your article, give it a title, tag it with appropriate tags, and fill
          out any other relevant fields. Then, once you're ready, change
          published: false to published: true in the front matter of the post
          and save. Your post will now be published.
        </p>
        <h3>Is there a guide for how to use talk editor?</h3>
        <p>
          Yes! Here is our editor guide, you can also find it by clicking the
          "?" page in the editor.
        </p>
        <h3>How do I get featured on the home page?</h3>
        <p>
          The home page is selected by our editorial team. You can email us with
          any specific questions.
        </p>
        <h3>
          Can I cross-post something I've already written on my own blog or
          Medium?
        </h3>
        <p>
          Absolutely, as long as you have the rights you need to do so! And if
          it's of high quality, we'll feature it.
        </p>
        <h3>How do I change my Twitter/GitHub username?</h3>
        <p>
          You can add or remove Twitter/GitHub associations from your settings,
          but note that you can only do this if both Twitter and GitHub are
          connected to your account. If you have any issues with this, email
          yo@dev.to and we'll take care of it.
        </p>
      </div>
    </div>
  );
};

export default Faq;
