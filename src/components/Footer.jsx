import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Abdur Razzak, All rights reserved.
      </p>
      <div className="flex space-x-4 justify-center">
                <a href="https://linkedin.com/in/abdur-razzak-0a3b91321" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://github.com/Razzak118348" target="_blank">
                  <Github />
                </a>
              </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
