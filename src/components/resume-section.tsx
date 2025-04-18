import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { FileDown } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
}

const certifications: Certification[] = [
  {
    title: "Flutter Clean Architecture",
    issuer: "Udemy",
    date: "July 2023",
  },
  {
    title: "Flutter Development Guide (2022 Edition)",
    issuer: "Udemy",
    date: "June 2022",
  },
  {
    title: "Android Development Track",
    issuer: "Udacity",
    date: "2021",
  },
];

export function ResumeSection() {
  const handleResumeDownload = () => {
    const resumeUrl = "https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'George_Mounir_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Resume & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <h3 className="text-xl font-bold mb-6">Resume Overview</h3>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Education</h4>
                      <p className="text-muted-foreground">Bachelor of Computer Science, New Cairo Academy (2019–2023)</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Experience</h4>
                      <p className="text-muted-foreground">Over 2 years of experience in Flutter and mobile development</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold">App Publishing</h4>
                      <p className="text-muted-foreground">Published multiple apps to Google Play, App Store, Amazon App Store, Huawei Gallery</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Core Strengths</h4>
                      <p className="text-muted-foreground">Dart, Firebase, REST APIs, Clean Architecture, MVVM, and OOP</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Backend Integration</h4>
                      <p className="text-muted-foreground">Experience using Python (Frappe) and PHP</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 flex justify-center">
                  <Button 
                    className="flex items-center gap-2" 
                    onClick={handleResumeDownload}
                  >
                    <FileDown size={18} />
                    <span>Download Full Resume</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full lg:w-1/2 animate-fade-in animation-delay-300">
            <h3 className="text-xl font-bold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm">{cert.issuer} • {cert.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
