"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function ServiceRegistrationForm() {
  const [formData, setFormData] = useState({
    serviceName: "",
    serviceDetails: "",
    servicePrice: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5000/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("サービスの登録に失敗しました");
      }

      setStatus("success");
      setMessage("サービスが正常に登録されました");
      setFormData({ serviceName: "", serviceDetails: "", servicePrice: "" });
    } catch (error) {
      setStatus("error");
      setMessage("エラーが発生しました。もう一度お試しください。");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">シニア向けサービス登録</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="serviceName">サービス名</Label>
          <Input
            id="serviceName"
            name="serviceName"
            value={formData.serviceName}
            onChange={handleChange}
            required
            maxLength={100}
          />
        </div>
        <div>
          <Label htmlFor="serviceDetails">サービスの詳細内容</Label>
          <Textarea
            id="serviceDetails"
            name="serviceDetails"
            value={formData.serviceDetails}
            onChange={handleChange}
            required
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="servicePrice">サービスの価格</Label>
          <Input
            id="servicePrice"
            name="servicePrice"
            type="number"
            value={formData.servicePrice}
            onChange={handleChange}
            required
            min="0"
            step="1"
            placeholder="円"
          />
        </div>
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "送信中..." : "サービスを登録"}
        </Button>
      </form>
      {status === "success" && (
        <Alert className="mt-4">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>成功</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
      {status === "error" && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>エラー</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
