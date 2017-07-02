#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform bool classic = false;
const float PI = 3.1415926535897932384626433832795;

void main()
{
    float d = distance(vec2(0.5, 0.5), vtexCoord);
    if (classic) {
        fragColor = vec4(1.0, step(0.2, d), step(0.2, d), 1.0);
    }
    else {
        float phi = PI / 16.0;
        vec2 u = vtexCoord - vec2(0.5, 0.5);
        float oRallada = atan(u.t, u.s);
        
        
        // para hacer el monguer bien, cambia la or por una AND GG
        if ((mod(oRallada/phi + 0.5, 2) < 1.0) || step(0.2, d) == 0) { 
            fragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
        else {
            fragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }
    }
}
