import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <main className="flex justify-center items-center h-screen">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>로그인</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5">
              <div className="space-y-2">
                <Label>이메일</Label>
                <Input type="text" />
              </div>
              <div className="space-y-2">
                <Label>비밀번호</Label>
                <Input type="password" />
              </div>
              <Button className="w-full">로그인</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
