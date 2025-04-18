
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Dart", "Python", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["Flutter", "Vue.js", "Frappe"],
  },
  {
    title: "Concepts",
    skills: ["Clean Architecture", "MVVM", "OOP", "SOLID", "RESTful APIs"],
  },
  {
    title: "Tools",
    skills: ["Firebase", "FCM", "Google Maps", "GitHub", "ERPNext"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className={`animate-fade-in animation-delay-${index*100}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-primary">#</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1.5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            I'm continuously learning and expanding my skill set to keep up with the latest technologies and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}
