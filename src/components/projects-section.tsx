
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  links: {
    googlePlay?: string;
    appStore?: string;
    amazon?: string;
    huawei?: string;
    github?: string;
  };
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Otlbne Getak",
    description: "Food ordering, appointment booking, and delivery management app with multiple roles.",
    longDescription: "An app for food ordering, appointment booking, and delivery management. Features three roles: User, Facility (clinic/restaurant), and Driver with real-time tracking. Implemented complex state management for multi-role functionality and integrated Google Maps for real-time location tracking.",
    tech: ["Flutter", "Dart", "REST APIs", "Firebase", "Google Maps", "MVVM"],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.otlbnegetak.otlbne_getak&hl=en",
    },
    image: "https://play-lh.googleusercontent.com/wbWaZGKPrbP7IDBwFy2c0VeKBMn3M_hcWC_EF0dRzfydaRgu6cTxOpQF0TZxBbVmkb4=w480-h960",
  },
  {
    id: 2,
    title: "SB System",
    description: "ERP-powered clinic management app with chat, patient management, and insurance support.",
    longDescription: "ERP-powered clinic management app: supports chat, patient management, insurance, and task tracking. Leveraged ERP systems to create a comprehensive healthcare management solution with real-time data synchronization across all modules.",
    tech: ["Flutter", "MVVM", "Location", "REST APIs", "ERP Integration"],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.system.sb_clinics&hl=en",
      amazon: "https://www.amazon.com/Soul-Body-SB-System/dp/B0DVT2SJV1?refinements=p_4%3ASoul%20Body&search-type=ss",
      huawei: "https://appgallery.huawei.com/app/C113388227",
    },
    image: "https://appimg-dra.dbankcdn.com/application/icon144/65/38b82757354c41aa865d1e89100f337f.png",
  },
  {
    id: 3,
    title: "Smart Vision Group",
    description: "Mobile HR solution with attendance tracking, request approvals, and manager dashboards.",
    longDescription: "Mobile HR solution: Attendance tracking, request approvals, and manager dashboards. Built with Flutter and Python/Frappe backend. Implemented location-based check-in/check-out system with validation and custom dashboards for different management levels.",
    tech: ["Flutter", "Python", "Frappe", "Dart", "REST APIs", "MVVM"],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.svg.smart_vision&hl=en",
      appStore: "https://apps.apple.com/us/app/smart-vision-group/id6741403431?platform=iphone",
      amazon: "https://www.amazon.com/dp/B0DSLTKSNV",
    },
    image: "https://play-lh.googleusercontent.com/0plqRCgesMD84DWoFEr2J4ZTBSeiDGi1RCTgKTTZvBN8c6T0gK6Q7BdlYPPm34i1LLE=w480-h960",
  },
  {
    id: 4,
    title: "SBU (Soul Body User)",
    description: "Healthcare booking app with doctor scheduling and pharmacy order features.",
    longDescription: "Healthcare booking app with Vezeeta-like features: doctor/surgery scheduling and pharmacy orders. Created a seamless user experience for healthcare appointment booking with calendar integration and notification system for appointment reminders.",
    tech: ["Flutter", "Dart", "MVVM", "Appointment System"],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.sb.patient_soul_body.huawei&hl=en",
      amazon: "https://www.amazon.com/dp/B0DTQ8BZ21",
      huawei: "https://appgallery.huawei.com/app/C112042341?sharePrepath=ag&locale=en_US&source=appshare&subsource=C112042341&shareTo=com.android.bluetooth&shareFrom=appmarket&shareIds=d1858e2085c14b909bd431967d29723a_com.android.bluetooth&callType=SHARE",
    },
    image: "https://play-lh.googleusercontent.com/a0zDP3bcIZiodnqL9FVn8n7K5R1ByJacJTes6I4C8U8E_M_hNTWvnHO9jkdyOTO77nRT=w480-h960",
  },
  {
    id: 5,
    title: "Sporting Club App",
    description: "Complete UI and backend revamp of a club management app.",
    longDescription: "Complete UI and backend revamp of a club management app. Redesigned the entire user interface and restructured the backend connections to improve performance and user experience. Added location-based features and push notifications for club announcements.",
    tech: ["Flutter", "PHP", "WebView", "Notifications", "Location"],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.objects.sporting_club&hl=en",
      appStore: "https://apps.apple.com/eg/app/alex-sporting-club/id1488603520?platform=iphone",
    },
    image: "https://play-lh.googleusercontent.com/y_ijcYg02ftOkzkemVuw8Pjq-2-kc3AvCyrvgsQ_acTddO7LrNe56yjCrIupF72aCg=w480-h960",
  },
  {
    id: 6,
    title: "E-Lab Health Diagnosis App",
    description: "AI-based app for diagnosing diabetes, skin cancer, and analyzing X-rays.",
    longDescription: "AI-based app for diagnosing diabetes, skin cancer, and analyzing X-rays. Graduation project that integrated multiple machine learning models into a Flutter application. Built with clean architecture principles for maintainability and scalability.",
    tech: ["Flutter", "AI", "Clean Architecture"],
    links: {
      github: "https://github.com/georgee2/elab/tree/master",
    },
    image: "https://github.com/georgee2/elab/blob/master/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-secondary/30 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each demonstrates different skills and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs">+{project.tech.length - 3}</Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </Button>
                <div className="flex gap-2">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.links.googlePlay && (
                    <a 
                      href={project.links.googlePlay} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-base mt-2">
                {selectedProject.longDescription}
              </DialogDescription>
            </DialogHeader>
            
            <div className="my-4">
              <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Available on:</h4>
              <div className="flex flex-wrap gap-3 mt-2">
                {selectedProject.links.googlePlay && (
                  <Button asChild variant="outline" size="sm">
                    <a href={selectedProject.links.googlePlay} target="_blank" rel="noopener noreferrer">
                      Google Play
                    </a>
                  </Button>
                )}
                {selectedProject.links.appStore && (
                  <Button asChild variant="outline" size="sm">
                    <a href={selectedProject.links.appStore} target="_blank" rel="noopener noreferrer">
                      App Store
                    </a>
                  </Button>
                )}
                {selectedProject.links.amazon && (
                  <Button asChild variant="outline" size="sm">
                    <a href={selectedProject.links.amazon} target="_blank" rel="noopener noreferrer">
                      Amazon
                    </a>
                  </Button>
                )}
                {selectedProject.links.huawei && (
                  <Button asChild variant="outline" size="sm">
                    <a href={selectedProject.links.huawei} target="_blank" rel="noopener noreferrer">
                      Huawei Gallery
                    </a>
                  </Button>
                )}
                {selectedProject.links.github && (
                  <Button asChild variant="outline" size="sm">
                    <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
