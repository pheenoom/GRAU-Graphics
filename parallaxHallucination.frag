#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D map;
uniform float time;
uniform float a = 0.5;
const float PI = 3.1415926535897932384626433832795;

void main()
{
    vec4 c = texture(map, vtexCoord);
    float m = max(max(c.r, c.g), c.b); // [0..1]
    vec2 u = vec2(m, m);
    float oRallada = 2.0 * PI * time;
    
    mat2 matriuRotacio = mat2(  vec2(cos(oRallada), sin(oRallada)),
                                vec2(-sin(oRallada), cos(oRallada)));
    u = matriuRotacio * u;
    vec2 offset = (a/100.0) * u;
    
    fragColor = texture(map, vtexCoord + offset);
}
