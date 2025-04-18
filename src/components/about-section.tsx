
import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary/30 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <Card className="w-full lg:w-1/2 animate-fade-in">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Profile</h3>
              <p className="text-muted-foreground mb-4">
                I'm a Flutter developer with over 2 years of experience building 
                cross-platform mobile applications. Based in Cairo, Egypt, I specialize 
                in creating robust applications for healthcare, ERP systems, and logistics.
              </p>
              <p className="text-muted-foreground mb-4">
                With a Bachelor's degree in Computer Science from New Cairo Academy (2019-2023), 
                I have a strong foundation in software engineering principles and best practices.
              </p>
              <p className="text-muted-foreground">
                I'm passionate about clean code architecture, building performant applications, 
                and staying updated with the latest mobile development trends.
              </p>
            </CardContent>
          </Card>
          
          <Card className="w-full lg:w-1/2 animate-fade-in animation-delay-300">
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <p className="font-medium">Bachelor of Computer Science</p>
                <p className="text-muted-foreground">New Cairo Academy (2019–2023)</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Experience</h3>
                <p className="font-medium">Over 2 years in Flutter Development</p>
                <ul className="list-disc list-inside text-muted-foreground ml-2 space-y-1">
                  <li>Mobile application development</li>
                  <li>Backend integration</li>
                  <li>App deployment to multiple marketplaces</li>
                  <li>Clean architecture implementation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-pill">UI/UX Design</span>
                  <span className="tech-pill">Mobile Development</span>
                  <span className="tech-pill">Clean Architecture</span>
                  <span className="tech-pill">Performance Optimization</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
