import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="container bg-white p-5 mt-3 h-100">
        <h1 className="text-bold text mb-5 text-center">
          Frequently Asked Questions
        </h1>

        <h4 className="text-bold text">Who can post to talkweb?</h4>
        <p>
          Anyone! Yes, you have permission to make a new post of any kind as
          long as it meets our community guidelines and gets through
          common-sense spam filters. Your post is subject to removal at the
          discretion of the moderators if they believe it does not meet the
          requirements of our code of conduct.
        </p>
        <h4>How do I post article on talkweb?</h4>
        <p>
          Click on "Write a Post" in the top right corner of the site. Write
          your article, give it a title, tag it with appropriate tags, and fill
          out any other relevant fields. Then, once you're ready, change
          published: false to published: true in the front matter of the post
          and save. Your post will now be published.
        </p>
        <h4>Is there a guide for how to use talk editor?</h4>
        <p>
          Yes! Here is our editor guide, you can also find it by clicking the
          "?" page in the editor.
        </p>
        <h3>How do I get featured on the home page?</h3>
        <p>
          The home page is selected by our editorial team. You can email us with
          any specific questions.
        </p>
        <h4>
          Can I cross-post something I've already written on my own blog or
          Medium?
        </h4>
        <p>
          Absolutely, as long as you have the rights you need to do so! And if
          it's of high quality, we'll feature it.
        </p>
      </div>
    </div>
  );
};

export default Faq;
