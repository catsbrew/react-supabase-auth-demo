import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

function SignUpPage() {
  return (
    <main className="flex flex-col justify-center items-center h-screen space-y-10">
      <Link
        href="/"
        className="hover:text-3xl px-5 py-1 rounded-xs transition-all"
      >
        Home
      </Link>

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

            <Separator />

            <div className="space-y-2">
              <div className="space-y-2">
                <Label>비밀번호</Label>
                <Input type="password" />
              </div>
              <div className="space-y-2">
                <Label>비밀번호 확인</Label>
                <Input type="password" />
              </div>
            </div>
            <Button className="w-full">로그인</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

export default SignUpPage;
