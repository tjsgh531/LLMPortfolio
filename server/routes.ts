import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiRouter = "/api";

  // Contact form submission endpoint
  app.post(`${apiRouter}/contact`, async (req: Request, res: Response) => {
    try {
      // Validate request body
      const contactSchema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        subject: z.string().min(5),
        message: z.string().min(10),
      });

      const result = contactSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: result.error.format() 
        });
      }

      const contactData = result.data;
      
      // In a real app, you would send this to an email service or store in a database
      // For now, we'll just log it and simulate success
      console.log("Contact form submission:", contactData);
      
      // Save contact message using storage interface
      const savedMessage = await storage.saveContactMessage(contactData);
      
      return res.status(200).json({ 
        message: "Message received successfully", 
        id: savedMessage.id 
      });
    } catch (error) {
      console.error("Error handling contact form:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
